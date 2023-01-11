// Types
import type { RootState } from 'store'
import type { ChangeEventHandler, FormEventHandler } from 'react'

// Utils
import { ethers } from 'ethers'
import CampaignFactory from 'ethereum/build/ethereum/contracts/CampaignFactory.sol/CampaignFactory.json'

// Components
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Hooks
import { useState, useCallback, FormEvent } from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const initialState = {
  title: '',
  minimum: '',
  description: '',
}

const CreateCampaignForm = (props: Props) => {
  const wallet = useSelector((state: RootState) => state.wallet)
  const [fields, setField] = useState(initialState)

  const createCampaign: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault()

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const walletAddress = wallet.account as string
      const signer = provider.getSigner(walletAddress)

      const factoryAddress = process.env
        .NEXT_PUBLIC_CAMPAIGNS_FACTORY_ADDRESS as string
      const contract = new ethers.Contract(
        factoryAddress,
        CampaignFactory.abi,
        signer
      )

      await contract.createCampaign(
        fields.title,
        fields.description,
        ethers.utils.parseEther(fields.minimum)
      )

      // Reset form
      setField(initialState)
    },
    [fields.description, fields.minimum, fields.title, wallet.account]
  )

  const onFieldChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = useCallback(
    (e) => {
      const target = e.currentTarget
      setField({
        ...fields,
        [target.name]: target.value,
      })
    },
    [fields]
  )

  return (
    <>
      <h3>Create a new campaign</h3>
      <p>Create a new campaign and start finding funds!</p>
      <Form onSubmit={createCampaign}>
        <FloatingLabel
          controlId="title"
          label="Give your campaign a title"
          className="mb-3 text-body"
        >
          <Form.Control
            name="title"
            type="text"
            placeholder="Give your campaign a title"
            value={fields.title}
            onChange={onFieldChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="minimum"
          label="Minimum contribution"
          className="mb-3 text-body"
        >
          <Form.Control
            name="minimum"
            type="number"
            step={0.01}
            placeholder="Minimum contribution"
            value={fields.minimum}
            onChange={onFieldChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="description"
          label="Describe here your idea"
          className="mb-3 text-body"
        >
          <Form.Control
            name="description"
            placeholder="Describe here your idea"
            as="textarea"
            value={fields.description}
            onChange={onFieldChange}
            style={{ height: '100px' }}
            required
          />
        </FloatingLabel>
        <Button type="submit" variant="success">
          Create
        </Button>
      </Form>
    </>
  )
}

export default CreateCampaignForm
