import Image from 'next/image'
import logo from '@/images/logos/daizylogo.png'

export function Logo() {
  return <Image src={logo} width={120} height={120} />
}
