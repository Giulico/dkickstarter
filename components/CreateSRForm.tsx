'use client'

// Types
import type { ChangeEventHandler, FormEventHandler } from 'react'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Hooks
import { useState, useCallback } from 'react'

type Props = {}

const initialState = {
  description: '',
  value: '',
  recipient: '',
}

export default function CreateSRForm({}: Props) {
  const [fields, setField] = useState(initialState)

  const createRequest: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      console.log('Request submitted')
    },
    []
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
