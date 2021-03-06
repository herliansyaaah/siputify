import { useSelector, useDispatch } from "react-redux";

import { set, reset } from "../store/slice";
import React, { useState, useEffect } from "react";

// Configurations
import { getTracks, getToken } from "../components/API/api";


// Components
import logo from "../spotify.png";
import CreatePlaylist from "../components/createplaylist";
import SearchMusic from "../components/Search/SearchMusic";
import Navigation from "../components/navigation";
import Login from "../components/login";
import Musics from "../components/musics";

// Styling
import "./index.css";

const Home = () => {
    const config = {
		client_id: `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`,
		redirect_uri: `${process.env.REACT_APP_BASE_URL}`,
		authorize_url: `https://accounts.spotify.com/authorize`,
		scope: "playlist-modify-private",
	};

	let redirectUrl = `${config.authorize_url}?client_id=${config.client_id}&response_type=token&redirect_uri=${config.redirect_uri}&scope=${config.scope}`;

	// Trakcs
	const [tracks, setTracks] = useState([]);
	const currQuery = useSelector((state) => state.query.value);
	const dispatch = useDispatch();
	const [selectedTracks, setSelectedTracks] = useState([]);

	// Config
	const [token, setToken] = useState("");
	const [show, setShow] = useState(false);

	useEffect(() => {
		// check the token everytime the web loaded
		if (
			window.localStorage.getItem("token") ||
			!window.localStorage.getItem("token")
		) {
			setToken(getToken());
		}
	}, []);

	// Handle Logout
	const handleLogout = () => {
		setToken("");
		window.localStorage.removeItem("token");
	};

	// Get data from API
	const handleSearch = (e) => {
		e.preventDefault();
		getTracks(currQuery, token).then((data) => setTracks(data));
	};

	// Handle select track
	const handleSelect = (track) => {
		const isSelected = selectedTracks.find(
			(selectedTrack) => selectedTrack === track
		);

		if (isSelected) {
			setSelectedTracks(
				selectedTracks.filter((selectedTrack) => selectedTrack !== track)
			);
		} else {
			setSelectedTracks((prev) => [...prev, track]);
		}
		console.log(selectedTracks);
	};

	const test = selectedTracks.map((track) => (
		<div key={track.id}>
			<p>{track.name}</p>
			<p>{track.uri}</p>
			<p>{track.artists[0].name}</p>
		</div>
	));

	const handleChange = (e) => dispatch(set(e.target.value));

	return (
		<>
			{!token ? (
				<Login redirectUrl={redirectUrl} logo={logo} />
			) : (
				<>
					<Navigation
						logo={logo}
						modalShow={() => setShow(true)}
						logout={handleLogout}
					/>
					<CreatePlaylist show={show} onClose={() => setShow(false)} />
					<div id='tracks'>
						<div className='introduction'>
							<h1 className='title'>Find and Create Playlist</h1>
							<p>Find a track, select it, and create your personal playlist</p>
						</div>
						{test}
						<SearchMusic onChange={handleChange} onSubmit={handleSearch} />
						<Musics
							tracks={tracks}
							onSelectTrack={handleSelect}
							selectedTracks={selectedTracks}
						/>
					</div>
				</>
			)}
		</>
	);
};
