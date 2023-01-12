import Image from 'next/image'

function Logo() {
  return (
    <div>
      <Image alt="Kickstarter" width="200" height="36" src="/logo.svg" />
    </div>
  )
}

export default Logo
