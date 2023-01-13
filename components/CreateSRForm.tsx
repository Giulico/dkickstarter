'use client'

// Types
import type { RootState } from 'store'
import type { ChangeEventHandler, FormEventHandler } from 'react'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Hooks
import { useState, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'

// Utils
import { ethers } from 'ethers'
import { getMetamaskSigner } from 'utils/wallet'
import Campaign from 'ethereum/build/ethereum/contracts/Campaign.sol/Campaign.json'

type Props = {}

const initialState = {
  description: '',
  value: '',
  recipient: '',
}

export default function CreateSRForm({}: Props) {
  const wallet = useSelector((state: RootState) => state.wallet)
  const [fields, setField] = useState(initialState)
  const pathname = usePathname()

  const contractAddress = useMemo(
    () => pathname?.split('/')[1] as string,
    [pathname]
  )

  const createRequest: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault()
      if (!wallet.account) {
        return
      }

      const signer = getMetamaskSigner(wallet.account)

      const contract = new ethers.Contract(
        contractAddress,
        Campaign.abi,
        signer
      )

      // We need to buy separated garbage cans.
      // 0x82DD597fA8fFedF562a370b14E9E7caBc0637582
      await contract.createRequest(
        fields.description,
        ethers.utils.parseEther(fields.value),
        fields.recipient
      )

      // Reset form
      setField(initialState)
    },
    [fields, wallet.account]
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
    <Container>
      <Row>
        <Col md="8">
          <strong className="d-block my-3">Please fill the following</strong>
          <Form onSubmit={createRequest}>
            <FloatingLabel
              controlId="description"
              label="Describe what the request is for"
              className="mb-3 text-body"
            >
              <Form.Control
                name="description"
                placeholder="Describe what the request is for"
                as="textarea"
                value={fields.description}
                onChange={onFieldChange}
                style={{ height: '100px' }}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="value"
              label="Amount of the request"
              className="mb-3 text-body"
            >
              <Form.Control
                name="value"
                type="number"
                step={0.01}
                placeholder="Amount of the request"
                value={fields.value}
                onChange={onFieldChange}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="recipient"
              label="Recipient address"
              className="mb-3 text-body"
            >
              <Form.Control
                name="recipient"
                type="text"
                placeholder="Recipient address"
                value={fields.recipient}
                onChange={onFieldChange}
                required
              />
              <Form.Text className="text-muted">
                The address that will receive the funds when the request will be
                finished.
              </Form.Text>
            </FloatingLabel>
            <Button type="submit" variant="success">
              Submit the request
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
