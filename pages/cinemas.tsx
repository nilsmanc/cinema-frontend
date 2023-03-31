import { CinemaType } from '@/types'
import { Api } from '@/utils/api'
import { GetServerSideProps, NextPage } from 'next'

type CinemasProps = {
  cinemas: CinemaType[]
}

const Cinemas: NextPage<CinemasProps> = ({ cinemas }) => {
  return (
    <div>
      {cinemas.map((item) => (
        <>
          <div>{item.title}</div>
          <img src={item.imageUrl} />
        </>
      ))}
    </div>
  )
}

export default Cinemas

export const getServerSideProps = async (ctx: GetServerSideProps) => {
  try {
    const cinemas = await Api().cinemas.getAll()

    return {
      props: {
        cinemas,
      },
    }
  } catch (err) {
    console.log(err)
  }
  return {
    props: {
      cinemas: null,
    },
  }
}
