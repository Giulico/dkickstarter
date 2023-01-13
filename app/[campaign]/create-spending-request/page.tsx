// Components
import CreateSRIntro from 'components/CreateSRIntro'
import CreateSRForm from 'components/CreateSRForm'
import Link from 'next/link'

function CreateSpendingReview() {
  return (
    <>
      <div className="px-3 my-5">
        <Link href="/">← Go back</Link>
      </div>
      <CreateSRIntro>
        <h1 className="my-3">Create a Spending Request</h1>
        <p>
          Submitting a Spending Request you are able tu use the funds of your
          campaign.
        </p>
        <p>
          All the contributors can accept your request. When half of the
          contributors have approved the request, you will be able to finalize
          your request.
        </p>
      </CreateSRIntro>
      <CreateSRForm />
    </>
  )
}
export default CreateSpendingReview
