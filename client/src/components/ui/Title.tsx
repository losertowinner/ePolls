type TitleProps = {
	subject: string;
	description: string;
};

const Title = (props: TitleProps) => {
	return (
		<>
			<h1 className='display-4 fw-bold'>{props.subject}</h1>
			<p className='fs-5 text-white pb-md-4'>{props.description}</p>
		</>
	);
};

export default Title;
