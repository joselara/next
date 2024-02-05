import Image from 'next/image'

export default function Avatar() {
  return (
    <div className='h-16 w-16 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur'>
      <Image
        src='/me.jpg'
        width='100'
        height='100'
        className='rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'
        alt='Jose Lara Avatar'
      />
    </div>
  )
}
