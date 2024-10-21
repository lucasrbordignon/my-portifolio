import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

const sections = ['sobre', 'projetos', 'experiencia']

export default function Layout({ children }) {
  return (
    <div className="lg:h-screen max-w-[1280px] flex justify-center flex-col lg:flex-row">
      <div className="lg:w-[50%] pt-8 pl-32">
        <div className="lg:pt-[15%] flex flex-col justify-center items-start m-auto">
          <h1 className="text-5xl font-semibold text-zinc-100">Lucas Bordignon</h1>
          <h2 className="text-xl  text-zinc-200 my-3">Desenvolvedor Full Stack</h2>
          <p className="text-zinc-400 text-base text-wrap mb-14 w-1/2">Eu construo experiências digitais com uma ótica diferente para o mundo dos negócios!</p>

          <div className="lg:flex gap-3 flex-col w-[50%] justify-center items-start hidden"> 
            {
              sections.map((section) => {
                return <h1 className='text-zinc-400'>{section}</h1>
              })
            }
          </div>
        </div>

        <div  className="flex gap-4 w-[50%] items-center justify-start lg:fixed lg:bottom-12 relative pb-8"> 
          <AiOutlineInstagram size={32} color='#a1a1aa'/>
          <AiFillLinkedin size={32} color='#a1a1aa'/>
          <AiFillGithub size={32} color='#a1a1aa'/>
        </div>
      </div>

      <div className="lg:w-[50%] lg:overflow-y-auto h-full">
        <div className="lg:pt-[15%] lg:px-12 px-32 lg:pb-12">
          {children}
        </div>
      </div>
    </div>
  );
}
