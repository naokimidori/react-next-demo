import { useRouter } from 'next/router';
import axios from 'axios';

const url = 'https://mock.mengxuegu.com/mock/606da5b0b43557571f72643c/vino/testData'


function Test() {
  const router = useRouter();
  console.log(router);
  return (
    <div>Test_Page</div>
  )
}
export async function getInitialProps () {
  const request = new Promise((resolve) => {
    axios(url).then(res => {
      console.log('res', res)
      resolve
    });
  });
  return await request;
}

export default Test;