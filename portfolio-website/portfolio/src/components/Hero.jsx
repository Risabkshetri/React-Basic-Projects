// Hero.js
import profileImage from '../assets/profile.png';
import Button from './Button';
export default function Hero() {
	const handleClick = () => {
		alert('Button clicked!');
 };
	

	return (
	<section
		id="hero"
		className=" bg-slate-200 px-10 w-full shadow-xl flex gap-12 flex-col lg:flex-col 
				justify-center items-center align-center mt-40 
				mb-14 lg:mt-10 max-w-6xl mx-auto lg:gap-0 h-[80vh]">
		<div className="flex flex-col justify-center items-center gap-4">
			<img src={profileImage} alt="Hello, I am" className="w-32 h-32 rounded-full" />
			<h1 className="text-5xl text-red-700 font-bold">Risab Kshetri</h1>
			<h2 className='text-xl'>Student, Web Developer & Blogger</h2>
		</div>
		<div className="flex flex-row gap-4 w-10 mt-4 justify-start">
		
		</div>
		<Button onClick={handleClick} className="mr-2">
        Click Me
      </Button>
		<Button onClick={handleClick} className="mr-2">
        Click Me
      </Button>
		<Button onClick={handleClick} className="mr-2">
        Click Me
      </Button>
      

		<div>
		</div>
	</section>
	);
}
