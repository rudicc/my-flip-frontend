

export default function Heading({ title , desc }: any) {
  return (
    <>
      <div className='heading'>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </>
  )
}
