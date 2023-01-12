'use client'

// Types
import type { FormEventHandler, ChangeEventHandler } from 'react'
import type { RootState } from 'store'

// Utils
import { ethers } from 'ethers'
import { getMetamaskSigner } from 'utils/wallet'
import Campaign from 'ethereum/build/ethereum/contracts/Campaign.sol/Campaign.json'

// Components
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Hooks
import { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'

type Props = {
  manager: string
  address: string
}

const Contribute = ({ manager, address }: Props) => {
  const wallet = useSelector((state: RootState) => state.wallet)

  const [contribution, setContribution] = useState('')

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const value = e.target.value
    setContribution(value)
  }, [])

  const contribute: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault()

      if (!wallet.account) {
        return
      }
      const signer = getMetamaskSigner(wallet.account)
      const contract = new ethers.Contract(address, Campaign.abi, signer)

      await contract.contribute({
        value: ethers.utils.parseEther(contribution),
      })

      setContribution('')

      // TODO show a success alert
    },
    [address, contribution, wallet.account]
  )

  return (
    <div>
      <h3>Do you like this idea?</h3>
      <p>Support the project, just because it speaks to you.</p>

      {manager.toLowerCase() === wallet.account?.toLowerCase() && (
        <p>(Of course you can contribute to your own campaign!)</p>
      )}

      <Form onSubmit={contribute}>
        <FloatingLabel
          controlId="contribution"
          label="Your contribution (ETH)"
          className="mb-3 text-body"
        >
          <Form.Control
            name="contribution"
            type="number"
            step={0.01}
            placeholder="Your contribution (ETH)"
            value={contribution}
            onChange={onChange}
            required
          />
        </FloatingLabel>
        <Button type="submit" variant="success">
          Contribute
        </Button>
      </Form>
    </div>
  )
}

export default Contribute
