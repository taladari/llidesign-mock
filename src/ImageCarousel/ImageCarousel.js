import React, { Component } from 'react';
import './ImageCarousel.css';
import firstImg from './images/1.jpg';
import secondImg from './images/2.jpg';
import thirdImg from './images/3.jpg';
import fourthImg from './images/4.jpg';
import fifthImg from './images/5.jpg';
import sixthImg from './images/6.jpg';
import seventhImg from './images/7.jpg';


class ImageCarousel extends Component {

    constructor(props){
        super(props);
        // const intervalId = setInterval(() => {
        //                         this.updateNextImage(1);
        //                     }, 5000);
        this.state = {
            playSlideshow: false,
            images: [firstImg, secondImg, thirdImg, fourthImg, fifthImg, sixthImg, seventhImg],
            currentImg: 0,
            // intervalId: intervalId
        };

        this.handleArrowClick = this.handleArrowClick.bind(this);
        this.updateNextImage = this.updateNextImage.bind(this);
        this.handleClickRight = this.handleClickRight.bind(this);
        this.handleClickLeft = this.handleClickLeft.bind(this);
        this.getNextImageIndex = this.getNextImageIndex.bind(this);
        this.handleClickPlayPause = this.handleClickPlayPause.bind(this);
    }

    updateNextImage(side){
        this.setState((prevState, props) => ({
            currentImg: this.getNextImageIndex(prevState.currentImg, side)
        }));
    }

    getNextImageIndex(prevIndex, add){
        const newIndex = prevIndex + add;
        if (newIndex < 0)
        {		
            return ((newIndex % this.state.images.length) 
                    + this.state.images.length) % this.state.images.length;
        }
        return newIndex % this.state.images.length;
    };


    handleClickRight(e){
        e.preventDefault();
        this.handleArrowClick(1);
    }

    handleClickLeft(e){
        e.preventDefault();
        this.handleArrowClick(-1);
    }

    handleArrowClick(side){
        this.updateNextImage(side);
    }

    handleClickPlayPause(e){
        e.preventDefault();
        this.setState((prevState, props) => {
            if (prevState.playSlideshow){
                clearInterval(this.state.intervalId);
                return {playSlideshow: false};
            }
            else {
                const intervalId = setInterval(() => {
                    this.updateNextImage(1);
                }, 5000);
                return {playSlideshow: true, intervalId};
            }
        });
    }

    render(){      
        console.log('ImageCarousel render called');
        let style = {
            height: '100%',
            backgroundImage: `url(${this.state.images[this.state.currentImg]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };

        const playPause = this.state.playSlideshow ? "pause" : "play";

        return (
            <div className="anim" style={style}>
                <div className="arrow arrow-right" onClick={this.handleClickRight}>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="arrow arrow-left" onClick={this.handleClickLeft}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="play play-pause" onClick={this.handleClickPlayPause}>
                    <i className={"far fa-" + playPause + "-circle"}></i>
                </div>
            </div>
        );
    };

}

export default ImageCarousel;