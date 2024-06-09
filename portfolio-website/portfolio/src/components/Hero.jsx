// Hero.js
import profileImage from '../assets/profile.jpg';
export default function Hero() {
	return (
	<section
		id="hero"
		className=" bg-emerald-200 px-10 w-full flex gap-12 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
		<div className="flex flex-col justify-center items-center gap-4">
			<img src={profileImage} alt="Hello, I am" className="w-32 h-32 rounded-full" />
			<h1 className="text-5xl text-red-700 font-bold">Risab Kshetri</h1>
			<h2 className='text-xl'>Student, Web Developer & Blogger</h2>
		</div>
		<div>
		</div>
	</section>
	);
}
