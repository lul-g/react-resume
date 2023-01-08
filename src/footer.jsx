import "./body.css";
export default function Footer() {
  return (
    <footer className='flex'>
      <a
        href='https://lulseged-admasu.netlify.app/'
        target='_blank'
        className='developer'
      >
        Developed by <i className='fa-solid fa-code'></i>
        <span>Lul (Lulseged Admasu)</span>
      </a>
      <a
        href='https://www.enji.dev/work/contact'
        target='_blank'
        className='designer'
      >
        Designed by <i className='fa-solid fa-pen-nib'></i>{" "}
        <span>Enji Kusnadi</span>
      </a>
    </footer>
  );
}
