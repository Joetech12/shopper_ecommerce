import axios from 'axios';
import { useSession, signIn, signOut } from 'next-auth/react';

import Footer from '../components/footer';
import Header from '../components/header';

export default function Home({ country }) {
  const { data: session } = useSession();
  return (
    <div>
      <Header country={country} />
      <Footer country={country} />
    </div>
  );
}

// export async function getServerSideProps() {
//   let data = await axios
//     .get('https://api.ipregistry.co/?key=s0r73ufh0sdl08vl')
//     .then((res) => {
//       return res.data.location.country;
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   return {
//     props: {
//         country: { name: data.name, flag: data.flag.emojitwo },
//     },
//   };
// }
