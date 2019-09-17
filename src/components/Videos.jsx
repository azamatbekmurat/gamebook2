import React from 'react';
import { Player } from 'video-react';

const Videos = () => {
    return (       
        <div className="row">
            <div className="col 12" id='video'>
                <h4>Videos</h4>                  
                    <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>
                    <br/>
                    <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>
                
            </div>   
        </div>
            
    )
}

export default Videos;

