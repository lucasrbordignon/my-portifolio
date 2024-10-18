import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

const sections = ['sobre', 'projetos', 'experiencia']

export default function Layout({ children }) {
  return (
    <div className="h-screen flex justify-center">
      <div className="w-[50%] bg-zinc-800 text-white h-full pt-8 pl-32 relative">
        <div className="p-16 sticky top-0 flex flex-col justify-center items-start m-auto">
          <h1 className="text-5xl font-semibold text-zinc-100">Lucas Bordignon</h1>
          <h2 className="text-xl  text-zinc-200 my-3">Desenvolvedor Full Stack</h2>
          <p className="text-zinc-400 text-base text-wrap mb-14">Eu construo experiências digitais com uma ótica diferente para o mundo dos negócios!</p>

          <div className="flex gap-3 flex-col w-[50%] justify-center items-start"> 

            
            {
              sections.map((section) => {
                return <h1 className='text-zinc-400'>{section}</h1>
              })
            }
          </div>
        </div>

        <div  className="flex gap-4 text-center w-[50%] mt-32 items-center justify-start pl-16"> 
          <AiOutlineInstagram size={32} color='#a1a1aa'/>
          <AiFillLinkedin size={32} color='#a1a1aa'/>
          <AiFillGithub size={32} color='#a1a1aa'/>
        </div>
      </div>

      <div className="w-[50%] overflow-y-auto h-full bg-zinc-800">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
