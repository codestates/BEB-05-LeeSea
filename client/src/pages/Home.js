import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='home-title-section'>
				<div className='home-title-area'>
					<h1 className='home-title'>Welcome to LeeSea!<br></br>Discover, collect, and sell extraordinary NFTs</h1>
					<h3 className='home-description'>LeeSea가 만든 NFT마켓에 지금 참여하세요.</h3>
				</div>
				<div className='home-btn-area'>
					<Link to="/explore"><button type="button" className="home-btn go-to-explore">Explore</button></Link>
					<Link to="/create"><button type="button" className="home-btn go-to-create">Create</button></Link>
				</div>
			</div>
			<div className="home-title-image" >
				<img className='image-item' src="https://cdn.pixabay.com/photo/2016/07/11/11/48/printing-on-t-shirt-1509512_1280.png" width="100%" height="100%" alt='...'></img>
				<img className='image-item' src="https://cdn.pixabay.com/photo/2016/09/12/05/41/van-gogh-1663090_1280.jpg" width="100%" height="100%" alt='...'></img>
				<img className='image-item' src="https://cdn.pixabay.com/photo/2020/06/06/11/48/caricature-5266261_1280.jpg" width="100%" height="100%" alt='...'></img>
				<img className='image-item' src="https://cdn.pixabay.com/photo/2018/03/20/10/04/illustrator-3242713_1280.jpg" width="100%" height="100%" alt='...'></img>
				<img className='image-item' src="https://cdn.pixabay.com/photo/2017/03/19/15/14/happiness-2156794_1280.png" width="100%" height="100%" alt='...'></img>
				<img className='image-item' src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_1280.jpg" width="100%" height="100%" alt='...'></img>
				<img className='image-item' src="https://cdn.pixabay.com/photo/2020/05/19/13/48/cartoon-5190942_1280.jpg" width="100%" height="100%" alt='...'></img>
				<img className='image-item' src="https://cdn.pixabay.com/photo/2020/06/10/02/22/caricature-5280770_1280.jpg" width="100%" height="100%" alt='...'></img>
			</div>
			{/* <img className="home-title-image" src="" width="100%" height="100%" alt='...'></img> */}			
		</div>
	);

}


export default Home;