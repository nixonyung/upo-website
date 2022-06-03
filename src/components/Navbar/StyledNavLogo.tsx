import { Image } from '@mantine/core'
import Logo from '../../images/logo.png'

export default function StyledNavLogo() {
  return (
    <div>
      <div className='flex items-center'>
        <Image src={Logo} height={30} />
        <span className='font-Mont text-lg'>UST</span>
        <span className='font-Mont tracking-widerrr ml-3 text-lg font-bold'>
          UPO
        </span>
      </div>
    </div>
  )
}
