import React from "react";
import MusicCard from "./playlist-card";

const Musics = ({ tracks, onSelectTrack, selectedTracks }) => {
	function renderTrackCards() {
		return tracks.map((track) => {
			return (
				<MusicCard
					key={track.id}
					track={track}
					onSelectTrack={onSelectTrack}
					isSelected={selectedTracks.includes(track)}
				/>
			);
        });
	}
    return <div className='result'>{renderTrackCards()}</div>;
};

export default Musics;