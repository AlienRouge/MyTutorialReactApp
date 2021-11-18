import PreloaderImg from "./../Gifs/Preloader.gif"


const divStyle = {
    margin: 'auto',
    display: 'block',
};

const Preloader = () => {
    return (
        <img style={divStyle} src={PreloaderImg} alt=""/>
    )
}

export default Preloader;