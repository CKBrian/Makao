import './section.css';
import Comfort from '../../../assets/Icons/comfort.svg';
import Community from '../../../assets/Icons/community.svg';
import Rent from '../../../assets/Icons/rent.svg';
import Showcase from '../../../assets/Icons/showcase.svg';
import WhyIcon from '../../../assets/Icons/why-choose-us.svg';
import Search from '../../../assets/Icons/search.svg';
import { useState, useEffect } from 'react';
import axiosInstance from '../../../axios';
import { useNavigate } from 'react-router-dom';

function Section () {

	const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
	const [error, setError] = useState('')
	const navigate = useNavigate()

    const handleSearch = async (name) => {
		try {
        await axiosInstance.get(`properties/search/?query=${name}`)
		.then((response) => {
			setResults(response.data);
		})
		} catch {(error) => {
			setError(error)
		}};

    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    };

    useEffect(() => {
        handleSearch(search);
    }, [search]);

  return (
    <div className='sec-2'>
      <section className="home-main-section">
        <div className="call-to-action">
          <span className="title">Looking For a House?</span>
        </div>
        <div className="search-bar subtitle">
          <form>
		    <span className="search">
              <img src={Search} alt="Search Icon"  />
            </span>
            <input
              type='text'
              placeholder='Search properties by name, location...'
			  value={search}
			  onChange={handleInputChange}
            />
          </form>
		  <div className='search-results'>
			{Array.isArray(results) && results.length > 0 && (
				<div className='result-item'>
					{results.map((item, key) => (
						<div key={key} className='result-detail'>
							<p>{item.name}</p>
						</div>
					))}
				</div>
			)}
			</div>
        </div>
      </section>
      <section className="home-sub-section">
	    <div className="row" id="sub-section-1">
			<div className="card title">
				<h5 className='subtitle'>Community</h5>
			  <p className='cta'>Join Makao Community and Find your dream Home. We have a friendly community with great home owners and people who are looking for homes</p>
			  <button className="btn" onClick={() => navigate('/login')}>Get started</button>
			</div>
			<div className="card subtitle">
				<img src={Community} alt='community icon' />
			</div>
		</div>
	    <div className="row" id="sub-section-2">
			<div className="card title">
			  <h5 className="subtitle">Why choose us?</h5>
			  <div className="cardIcons">
			  	<div className="card-item">
				  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="0.0025177" width="89.995" height="89.995" rx="10" fill="#010F21" fill-opacity="0.4"/>
					<path d="M52.1031 27.8506L49.225 24.9006L51.4594 22.7194L53.4031 24.71L56.1844 24.6756C57.3883 24.6614 58.5829 24.888 59.6979 25.3421C60.813 25.7963 61.826 26.4688 62.6773 27.3202C63.5287 28.1715 64.2012 29.1845 64.6554 30.2996C65.1095 31.4146 65.3361 32.6092 65.3219 33.8131L65.2906 36.5944L67.2781 38.5381C68.1389 39.3793 68.8229 40.384 69.2899 41.4933C69.7569 42.6025 69.9975 43.7939 69.9975 44.9975C69.9975 46.201 69.7569 47.3925 69.2899 48.5017C68.8229 49.611 68.1389 50.6157 67.2781 51.4569L65.2875 53.4006L65.3219 56.1819C65.3361 57.3858 65.1095 58.5804 64.6554 59.6954C64.2012 60.8105 63.5287 61.8235 62.6773 62.6748C61.826 63.5262 60.813 64.1987 59.6979 64.6528C58.5829 65.107 57.3883 65.3336 56.1844 65.3194L53.4031 65.2881L51.4594 67.2756C50.6182 68.1364 49.6135 68.8204 48.5042 69.2874C47.395 69.7544 46.2036 69.995 45 69.995C43.7965 69.995 42.605 69.7544 41.4958 69.2874C40.3865 68.8204 39.3818 68.1364 38.5406 67.2756L36.5969 65.285L33.8156 65.3194C32.6117 65.3336 31.4171 65.107 30.3021 64.6528C29.187 64.1987 28.174 63.5262 27.3227 62.6748C26.4713 61.8235 25.7988 60.8105 25.3447 59.6954C24.8905 58.5804 24.6639 57.3858 24.6781 56.1819L24.7094 53.4006L22.7219 51.4569C21.8611 50.6157 21.1771 49.611 20.7101 48.5017C20.2431 47.3925 20.0025 46.201 20.0025 44.9975C20.0025 43.7939 20.2431 42.6025 20.7101 41.4933C21.1771 40.384 21.8611 39.3793 22.7219 38.5381L24.7125 36.5944L24.6781 33.8131C24.6639 32.6092 24.8905 31.4146 25.3447 30.2996C25.7988 29.1845 26.4713 28.1715 27.3227 27.3202C28.174 26.4688 29.187 25.7963 30.3021 25.3421C31.4171 24.888 32.6117 24.6614 33.8156 24.6756L36.5969 24.7069L38.5406 22.7194C39.3818 21.8585 40.3865 21.1745 41.4958 20.7076C42.605 20.2406 43.7965 20 45 20C46.2036 20 47.395 20.2406 48.5042 20.7076C49.6135 21.1745 50.6182 21.8585 51.4594 22.7194L49.225 24.9006C48.6749 24.3374 48.0177 23.8899 47.2922 23.5844C46.5666 23.2789 45.7873 23.1215 45 23.1215C44.2127 23.1215 43.4334 23.2789 42.7078 23.5844C41.9823 23.8899 41.3251 24.3374 40.775 24.9006L37.9 27.8506L33.775 27.8006C32.9881 27.7918 32.2073 27.9404 31.4786 28.2376C30.7499 28.5348 30.0879 28.9746 29.5315 29.5312C28.9752 30.0879 28.5357 30.7501 28.2389 31.479C27.9421 32.2078 27.7939 32.9887 27.8031 33.7756L27.8531 37.8944L24.9031 40.7725C24.34 41.3226 23.8925 41.9798 23.5869 42.7053C23.2814 43.4309 23.124 44.2102 23.124 44.9975C23.124 45.7848 23.2814 46.5641 23.5869 47.2896C23.8925 48.0152 24.34 48.6724 24.9031 49.2225L27.8531 52.0975L27.8031 56.2225C27.7943 57.0094 27.9429 57.7902 28.2401 58.5189C28.5373 59.2476 28.9771 59.9096 29.5338 60.466C30.0904 61.0223 30.7526 61.4618 31.4815 61.7586C32.2103 62.0554 32.9912 62.2036 33.7781 62.1944L37.8969 62.1444L40.775 65.0944C41.3251 65.6575 41.9823 66.105 42.7078 66.4106C43.4334 66.7161 44.2127 66.8735 45 66.8735C45.7873 66.8735 46.5666 66.7161 47.2922 66.4106C48.0177 66.105 48.6749 65.6575 49.225 65.0944L52.1 62.1444L56.225 62.1944C57.0119 62.2032 57.7927 62.0546 58.5214 61.7574C59.2502 61.4602 59.9121 61.0204 60.4685 60.4637C61.0248 59.9071 61.4643 59.2449 61.7611 58.516C62.0579 57.7871 62.2061 57.0063 62.1969 56.2194L62.1469 52.1006L65.0969 49.2225C65.66 48.6724 66.1076 48.0152 66.4131 47.2896C66.7186 46.5641 66.876 45.7848 66.876 44.9975C66.876 44.2102 66.7186 43.4309 66.4131 42.7053C66.1076 41.9798 65.66 41.3226 65.0969 40.7725L62.1469 37.8975L62.1969 33.7725C62.2057 32.9855 62.0571 32.2048 61.7599 31.4761C61.4627 30.7473 61.0229 30.0854 60.4663 29.529C59.9096 28.9727 59.2474 28.5332 58.5185 28.2364C57.7897 27.9396 57.0088 27.7914 56.2219 27.8006L52.1031 27.8506Z" fill="#C2E8FF"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M58.2405 34.5694C58.5024 34.8306 58.7102 35.141 58.852 35.4827C58.9938 35.8243 59.0667 36.1906 59.0667 36.5605C59.0667 36.9305 58.9938 37.2967 58.852 37.6384C58.7102 37.9801 58.5024 38.2904 58.2405 38.5517L41.3665 55.4257C41.1052 55.6876 40.7949 55.8954 40.4532 56.0372C40.1115 56.179 39.7452 56.252 39.3753 56.252C39.0054 56.252 38.6391 56.179 38.2974 56.0372C37.9558 55.8954 37.6454 55.6876 37.3842 55.4257L28.9471 46.9887C28.6857 46.7272 28.4783 46.4168 28.3367 46.0752C28.1952 45.7335 28.1224 45.3674 28.1224 44.9976C28.1224 44.6278 28.1952 44.2616 28.3367 43.92C28.4783 43.5783 28.6857 43.2679 28.9471 43.0064C29.2086 42.7449 29.519 42.5375 29.8607 42.396C30.2023 42.2545 30.5685 42.1817 30.9383 42.1817C31.3081 42.1817 31.6742 42.2545 32.0159 42.396C32.3575 42.5375 32.6679 42.7449 32.9294 43.0064L39.3753 49.4579L54.2582 34.5694C54.5195 34.3075 54.8298 34.0997 55.1715 33.9579C55.5132 33.8161 55.8795 33.7432 56.2494 33.7432C56.6193 33.7432 56.9856 33.8161 57.3273 33.9579C57.6689 34.0997 57.9793 34.3075 58.2405 34.5694Z" fill="#C2E8FF"/>
					</svg>
			  		<p>Trusted Residence owners that have verified properties</p>
				</div>
			  	<div className="card-item">
				  	<svg width="90" height="87" viewBox="0 0 90 87" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="0.780273" width="88.4395" height="86.2274" rx="10" fill="#010F21" fill-opacity="0.4"/>
					<path d="M42.0104 20.915C42.5964 20.3291 43.3911 20 44.2197 20C45.0484 20 45.8431 20.3291 46.4291 20.915L53.5947 28.0806V24.04C53.5947 23.6256 53.7594 23.2281 54.0524 22.9351C54.3454 22.6421 54.7428 22.4775 55.1572 22.4775H58.2822C58.6966 22.4775 59.0941 22.6421 59.3871 22.9351C59.6801 23.2281 59.8447 23.6256 59.8447 24.04V34.3306L67.201 41.6837C67.3463 41.829 67.4615 42.0014 67.5401 42.1913C67.6188 42.3811 67.6592 42.5845 67.6592 42.79C67.6592 42.9954 67.6188 43.1988 67.5401 43.3887C67.4615 43.5785 67.3463 43.7509 67.201 43.8962C67.0557 44.0415 66.8833 44.1567 66.6934 44.2353C66.5036 44.314 66.3002 44.3544 66.0947 44.3544C65.8893 44.3544 65.6859 44.314 65.496 44.2353C65.3062 44.1567 65.1338 44.0415 64.9885 43.8962L44.2197 23.1243L28.5947 38.7493V58.415C28.5947 58.8294 28.7594 59.2268 29.0524 59.5198C29.3454 59.8128 29.7428 59.9775 30.1572 59.9775H42.6572C43.0716 59.9775 43.4691 60.1421 43.7621 60.4351C44.0551 60.7281 44.2197 61.1256 44.2197 61.54C44.2197 61.9544 44.0551 62.3518 43.7621 62.6448C43.4691 62.9378 43.0716 63.1025 42.6572 63.1025H30.1572C28.914 63.1025 27.7218 62.6086 26.8427 61.7295C25.9636 60.8504 25.4697 59.6582 25.4697 58.415V41.8743L23.451 43.8962C23.3057 44.0415 23.1333 44.1567 22.9434 44.2353C22.7536 44.314 22.5502 44.3544 22.3447 44.3544C22.1393 44.3544 21.9359 44.314 21.746 44.2353C21.5562 44.1567 21.3838 44.0415 21.2385 43.8962C21.0932 43.7509 20.978 43.5785 20.8994 43.3887C20.8207 43.1988 20.7803 42.9954 20.7803 42.79C20.7803 42.5845 20.8207 42.3811 20.8994 42.1913C20.978 42.0014 21.0932 41.829 21.2385 41.6837L42.0104 20.915Z" fill="#C2E8FF"/>
					<path d="M58.2822 66.2275C61.183 66.2275 63.965 65.0752 66.0162 63.024C68.0674 60.9728 69.2197 58.1908 69.2197 55.29C69.2197 52.3892 68.0674 49.6072 66.0162 47.5561C63.965 45.5049 61.183 44.3525 58.2822 44.3525C55.3814 44.3525 52.5994 45.5049 50.5482 47.5561C48.4971 49.6072 47.3447 52.3892 47.3447 55.29C47.3447 58.1908 48.4971 60.9728 50.5482 63.024C52.5994 65.0752 55.3814 66.2275 58.2822 66.2275ZM63.5291 52.1869L59.3572 59.1432C59.1739 59.4488 58.9233 59.7086 58.6245 59.9027C58.3256 60.0969 57.9864 60.2204 57.6327 60.2638C57.279 60.3072 56.92 60.2693 56.5831 60.1531C56.2462 60.0369 55.9402 59.8454 55.6885 59.5932L53.2697 57.1775C52.9767 56.8841 52.8123 56.4864 52.8126 56.0717C52.8129 55.6571 52.9779 55.2596 53.2713 54.9666C53.5647 54.6736 53.9625 54.5092 54.3771 54.5095C54.7917 54.5098 55.1892 54.6748 55.4822 54.9682L57.1916 56.6775L60.8479 50.5807C60.9533 50.4046 61.0924 50.2511 61.2572 50.1288C61.4221 50.0065 61.6093 49.9178 61.8084 49.8679C62.0075 49.818 62.2144 49.8078 62.4174 49.8379C62.6204 49.8679 62.8155 49.9377 62.9916 50.0432C63.1677 50.1486 63.3212 50.2877 63.4435 50.4526C63.5658 50.6174 63.6544 50.8047 63.7043 51.0037C63.7542 51.2028 63.7645 51.4097 63.7344 51.6127C63.7043 51.8158 63.6346 52.0109 63.5291 52.1869Z" fill="#C2E8FF"/>
					</svg>
			  		<p>Choose from what you love from apartments to single homes</p>
				</div>
			  </div>
			  <div className="cardIcons">
			  	<div className="card-item">
				 	<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="90" height="90" rx="10" fill="#010F21" fill-opacity="0.4"/>
					<path d="M45 66.875C39.1984 66.875 33.6344 64.5703 29.532 60.468C25.4297 56.3656 23.125 50.8016 23.125 45C23.125 39.1984 25.4297 33.6344 29.532 29.532C33.6344 25.4297 39.1984 23.125 45 23.125C50.8016 23.125 56.3656 25.4297 60.468 29.532C64.5703 33.6344 66.875 39.1984 66.875 45C66.875 50.8016 64.5703 56.3656 60.468 60.468C56.3656 64.5703 50.8016 66.875 45 66.875ZM45 70C51.6304 70 57.9893 67.3661 62.6777 62.6777C67.3661 57.9893 70 51.6304 70 45C70 38.3696 67.3661 32.0107 62.6777 27.3223C57.9893 22.6339 51.6304 20 45 20C38.3696 20 32.0107 22.6339 27.3223 27.3223C22.6339 32.0107 20 38.3696 20 45C20 51.6304 22.6339 57.9893 27.3223 62.6777C32.0107 67.3661 38.3696 70 45 70Z" fill="#C2E8FF"/>
					<path d="M45 73.125C37.5408 73.125 30.3871 70.1618 25.1126 64.8874C19.8382 59.6129 16.875 52.4592 16.875 45C16.875 37.5408 19.8382 30.3871 25.1126 25.1126C30.3871 19.8382 37.5408 16.875 45 16.875C52.4592 16.875 59.6129 19.8382 64.8874 25.1126C70.1618 30.3871 73.125 37.5408 73.125 45C73.125 52.4592 70.1618 59.6129 64.8874 64.8874C59.6129 70.1618 52.4592 73.125 45 73.125ZM45 78.75C49.4321 78.75 53.8208 77.877 57.9156 76.1809C62.0103 74.4848 65.7309 71.9988 68.8649 68.8649C71.9988 65.7309 74.4848 62.0103 76.1809 57.9156C77.877 53.8208 78.75 49.4321 78.75 45C78.75 40.5679 77.877 36.1792 76.1809 32.0844C74.4848 27.9897 71.9988 24.2691 68.8649 21.1351C65.7309 18.0012 62.0103 15.5152 57.9156 13.8191C53.8208 12.123 49.4321 11.25 45 11.25C36.0489 11.25 27.4645 14.8058 21.1351 21.1351C14.8058 27.4645 11.25 36.0489 11.25 45C11.25 53.9511 14.8058 62.5355 21.1351 68.8649C27.4645 75.1942 36.0489 78.75 45 78.75Z" fill="#C2E8FF"/>
					<path d="M45 61.875C40.5245 61.875 36.2323 60.0971 33.0676 56.9324C29.9029 53.7678 28.125 49.4755 28.125 45C28.125 40.5245 29.9029 36.2323 33.0676 33.0676C36.2323 29.9029 40.5245 28.125 45 28.125C49.4755 28.125 53.7678 29.9029 56.9324 33.0676C60.0971 36.2323 61.875 40.5245 61.875 45C61.875 49.4755 60.0971 53.7678 56.9324 56.9324C53.7678 60.0971 49.4755 61.875 45 61.875ZM45 67.5C50.9674 67.5 56.6903 65.1295 60.9099 60.9099C65.1295 56.6903 67.5 50.9674 67.5 45C67.5 39.0326 65.1295 33.3097 60.9099 29.0901C56.6903 24.8705 50.9674 22.5 45 22.5C39.0326 22.5 33.3097 24.8705 29.0901 29.0901C24.8705 33.3097 22.5 39.0326 22.5 45C22.5 50.9674 24.8705 56.6903 29.0901 60.9099C33.3097 65.1295 39.0326 67.5 45 67.5Z" fill="#C2E8FF"/>
					<path d="M53.4375 45C53.4375 47.2378 52.5486 49.3839 50.9662 50.9662C49.3839 52.5486 47.2378 53.4375 45 53.4375C42.7622 53.4375 40.6161 52.5486 39.0338 50.9662C37.4514 49.3839 36.5625 47.2378 36.5625 45C36.5625 42.7622 37.4514 40.6161 39.0338 39.0338C40.6161 37.4514 42.7622 36.5625 45 36.5625C47.2378 36.5625 49.3839 37.4514 50.9662 39.0338C52.5486 40.6161 53.4375 42.7622 53.4375 45Z" fill="#C2E8FF"/>
					</svg>
			  		<p>We offer recommendations tailored for you</p>
				</div>
			  	<div className="card-item">
					<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="90" height="90" rx="10" fill="#010F21" fill-opacity="0.4"/>
					<path d="M26.25 51.25H35.625C36.4538 51.25 37.2487 51.5792 37.8347 52.1653C38.4208 52.7513 38.75 53.5462 38.75 54.375V63.75C38.75 64.5788 38.4208 65.3737 37.8347 65.9597C37.2487 66.5458 36.4538 66.875 35.625 66.875H26.25C25.4212 66.875 24.6263 66.5458 24.0403 65.9597C23.4542 65.3737 23.125 64.5788 23.125 63.75V54.375C23.125 53.5462 23.4542 52.7513 24.0403 52.1653C24.6263 51.5792 25.4212 51.25 26.25 51.25ZM54.375 23.125H63.75C64.5788 23.125 65.3737 23.4542 65.9597 24.0403C66.5458 24.6263 66.875 25.4212 66.875 26.25V35.625C66.875 36.4538 66.5458 37.2487 65.9597 37.8347C65.3737 38.4208 64.5788 38.75 63.75 38.75H54.375C53.5462 38.75 52.7513 38.4208 52.1653 37.8347C51.5792 37.2487 51.25 36.4538 51.25 35.625V26.25C51.25 25.4212 51.5792 24.6263 52.1653 24.0403C52.7513 23.4542 53.5462 23.125 54.375 23.125ZM54.375 51.25C53.5462 51.25 52.7513 51.5792 52.1653 52.1653C51.5792 52.7513 51.25 53.5462 51.25 54.375V63.75C51.25 64.5788 51.5792 65.3737 52.1653 65.9597C52.7513 66.5458 53.5462 66.875 54.375 66.875H63.75C64.5788 66.875 65.3737 66.5458 65.9597 65.9597C66.5458 65.3737 66.875 64.5788 66.875 63.75V54.375C66.875 53.5462 66.5458 52.7513 65.9597 52.1653C65.3737 51.5792 64.5788 51.25 63.75 51.25H54.375ZM54.375 20C52.7174 20 51.1277 20.6585 49.9556 21.8306C48.7835 23.0027 48.125 24.5924 48.125 26.25V35.625C48.125 37.2826 48.7835 38.8723 49.9556 40.0444C51.1277 41.2165 52.7174 41.875 54.375 41.875H63.75C65.4076 41.875 66.9973 41.2165 68.1694 40.0444C69.3415 38.8723 70 37.2826 70 35.625V26.25C70 24.5924 69.3415 23.0027 68.1694 21.8306C66.9973 20.6585 65.4076 20 63.75 20H54.375ZM26.25 48.125C24.5924 48.125 23.0027 48.7835 21.8306 49.9556C20.6585 51.1277 20 52.7174 20 54.375V63.75C20 65.4076 20.6585 66.9973 21.8306 68.1694C23.0027 69.3415 24.5924 70 26.25 70H35.625C37.2826 70 38.8723 69.3415 40.0444 68.1694C41.2165 66.9973 41.875 65.4076 41.875 63.75V54.375C41.875 52.7174 41.2165 51.1277 40.0444 49.9556C38.8723 48.7835 37.2826 48.125 35.625 48.125H26.25ZM48.125 54.375C48.125 52.7174 48.7835 51.1277 49.9556 49.9556C51.1277 48.7835 52.7174 48.125 54.375 48.125H63.75C65.4076 48.125 66.9973 48.7835 68.1694 49.9556C69.3415 51.1277 70 52.7174 70 54.375V63.75C70 65.4076 69.3415 66.9973 68.1694 68.1694C66.9973 69.3415 65.4076 70 63.75 70H54.375C52.7174 70 51.1277 69.3415 49.9556 68.1694C48.7835 66.9973 48.125 65.4076 48.125 63.75V54.375ZM20 26.25C20 24.5924 20.6585 23.0027 21.8306 21.8306C23.0027 20.6585 24.5924 20 26.25 20H35.625C37.2826 20 38.8723 20.6585 40.0444 21.8306C41.2165 23.0027 41.875 24.5924 41.875 26.25V35.625C41.875 37.2826 41.2165 38.8723 40.0444 40.0444C38.8723 41.2165 37.2826 41.875 35.625 41.875H26.25C24.5924 41.875 23.0027 41.2165 21.8306 40.0444C20.6585 38.8723 20 37.2826 20 35.625V26.25ZM36.7313 28.9188C36.8765 28.7735 36.9918 28.601 37.0704 28.4112C37.149 28.2214 37.1895 28.018 37.1895 27.8125C37.1895 27.6071 37.149 27.4036 37.0704 27.2138C36.9918 27.024 36.8765 26.8515 36.7313 26.7062C36.586 26.561 36.4135 26.4457 36.2237 26.3671C36.0339 26.2885 35.8305 26.248 35.625 26.248C35.4195 26.248 35.2161 26.2885 35.0263 26.3671C34.8365 26.4457 34.664 26.561 34.5187 26.7062L29.375 31.8531L27.3563 29.8312C27.211 29.686 27.0385 29.5707 26.8487 29.4921C26.6589 29.4135 26.4554 29.373 26.25 29.373C26.0446 29.373 25.8411 29.4135 25.6513 29.4921C25.4615 29.5707 25.289 29.686 25.1438 29.8312C24.9985 29.9765 24.8832 30.149 24.8046 30.3388C24.726 30.5286 24.6855 30.732 24.6855 30.9375C24.6855 31.143 24.726 31.3464 24.8046 31.5362C24.8832 31.726 24.9985 31.8985 25.1438 32.0438L28.2687 35.1688C28.4139 35.3143 28.5863 35.4297 28.7761 35.5085C28.966 35.5872 29.1695 35.6278 29.375 35.6278C29.5805 35.6278 29.784 35.5872 29.9739 35.5085C30.1637 35.4297 30.3361 35.3143 30.4813 35.1688L36.7313 28.9188Z" fill="#C2E8FF"/>
					</svg>
			  		<p>No other service in Kenya offers the level of quality we do</p>
				</div>
			  </div>
			</div>
			<div className="card subtitle">
				<img src={WhyIcon} alt='why choose us icon' />
			</div>
		</div>
	    <div className="row" id="sub-section-3">
			<div className="card subtitle">
				<img src={Showcase} alt='showcase icon' />
			</div>
			<div className="card title">
				<h5 className='subtitle'>Showcase</h5>
			  <p className='cta'>Showcase Your Property to a wide audience and get tenants effortlessly</p>
			  <button className="btn" onClick={() => navigate('/advertise')}>Advertise</button>
			</div>
		</div>
	    <div className="row" id="sub-section-4">
			<div className="card title">
				<h5 className='subtitle'>Trusted</h5>
			  <p className='cta'>Get to Rent from verified and trusted Residence owners</p>
			  <button className="btn" onClick={() => navigate('/listings')}>Rent</button>
			</div>
			<div className="card subtitle">
				<img src={Rent} alt='rent icon' />
			</div>
		</div>
	    <div className="row comfort" id="sub-section-5">
			<div className="card subtitle">
				<img src={Comfort} alt='comfort icon' />
			</div>
			<div className="card title">
				<h5 className='subtitle'>Your Choice</h5>
			  <p className='cta'>Choose from apartments to single Homes all in one place</p>
			  <button className="btn" onClick={() => navigate('/listings')}>Start Journey</button>
			</div>
		</div>
      </section>
    </div>
  )
}

export default Section

