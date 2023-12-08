import "./MainSlide.css";

function MainSlide() {
  return (
    <div className="TopPage">
      {/* 
        
        
        
        */}
      <div className="Page">
        <div className="TopperBox">
          <div className="TopperMenu">
            <div className="Border">
              <p className="WithRightBorder">Calendar</p>
              <p className="WithRightBorder">Gallery</p>
              <p className="NoBorder">Shop</p>
            </div>
          </div>
        </div>

        <div className="LogoBox">
          <img
            className="Logo"
            src={"/MockAssets/LDC logo RED2.png"}
            alt="Logo"
          />
          <h1>
            Creative community holding heartwarming gatherings, gallery visits
            and workshops
          </h1>
        </div>

        <img
          className="Scribble"
          src={"/MockAssets/ScribbleMainPage.png"}
          alt="Scribble"
        />

        <div className="ScrollButtonBox">
          <div className="ScrollButton">
            <div className="ScrollBorder">
              <img
                className="ScrollArrow"
                src={"/MockAssets/Arrow-56.png"}
                alt="ScrollArrow"
              />
              <p className="ButtonText">Scroll to see more</p>
              <img
                className="ScrollArrow"
                src={"/MockAssets/Arrow-56.png"}
                alt="ScrollArrow"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 
        
        
        
        */}
      <div className="Page">
        <div className="PageTitleBox">
          <div className="PageTitle">
            <h2>Discover</h2>
            <h3>What we do</h3>
          </div>
          <h4>Texttexttexttexttexttexttexttexttexttexttext</h4>
        </div>

        <div className="SideScrollBox">
          <div className="SideScroll">
            <div className="SideArrowBox">
              <img
                className="SideArrow"
                src={"/MockAssets/Arrow-45.svg"}
                alt="SideArrow"
              />
            </div>

            <img
              className="GalleryPic"
              src={"/MockAssets/GalleryPic1.png"}
              alt="GalleryPic"
            />
            <img
              className="GalleryPic"
              src={"/MockAssets/GalleryPic2.png"}
              alt="GalleryPic"
            />
            <img
              className="GalleryPic"
              src={"/MockAssets/GalleryPic3.png"}
              alt="GalleryPic"
            />

            <div className="SideArrowBox">
              <img
                className="SideArrow"
                src={"/MockAssets/Arrow-46.svg"}
                alt="SideArrow"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 
        
        
        
        */}
      <div className="Page">
        <div className="PageTitleBox">
          <div className="PageTitle">
            <h2>Get to know your</h2>
            <h3>Hosts</h3>
          </div>
          <h4>Texttexttexttexttexttexttexttexttexttexttext</h4>
        </div>
        <div className="HostContainer">
          <div className="HostCardBox">
            <div className="HostCard">
              <img
                className="HostPic"
                src={"/MockAssets/HostPic.svg"}
                alt="Host"
              />
              <p className="HostName">Name</p>
              <p className="HostBio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt{" "}
              </p>
            </div>
            <div className="HostCard">
              <img
                className="HostPic"
                src={"/MockAssets/HostPic.svg"}
                alt="Host"
              />
              <p className="HostName">Name</p>
              <p className="HostBio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt{" "}
              </p>
            </div>
            <div className="HostCard">
              <img
                className="HostPic"
                src={"/MockAssets/HostPic.svg"}
                alt="Host"
              />
              <p className="HostName">Name</p>
              <p className="HostBio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
        
        
        
        */}

      <div className="Page">
        <div className="NextEventsBox">
          <div className="PageTitleBox">
            <div className="PageTitle">
              <h2>Our next event</h2>
              <h3>4 Nov</h3>
            </div>
            <img
              className="Stroke"
              src={"/MockAssets/stroke1.svg"}
              alt="Host"
            />
            <h4>Petrie Museum of Egyptian Archaeology</h4>
            <div className="SeeAllEventsButton">
              <p className="SeeAllEvents">See All Events</p>
            </div>
          </div>
          <div className="EventListBox">
            <div className="EventList">
              <p className="EventDate">02.12</p>
              <p className="EventName">Free gallery visit</p>
            </div>
            <div className="EventList">
              <p className="EventDate">02.12</p>
              <p className="EventName">Life Drawing workshop</p>
            </div>
            <div className="EventList">
              <p className="EventDate">02.12</p>
              <p className="EventName">Coffee & Sketch</p>
            </div>
            <div className="EventList">
              <p className="EventDate">02.12</p>
              <p className="EventName">Free gallery visit</p>
            </div>
          </div>
        </div>
      </div>

      {/* 
        
        
        
        */}

      <div className="Page">
        <div className="PageTitleBox">
          <div className="PageTitle">
            <h2>Past events</h2>
          </div>
          <div className="PastEventsListBox">
            <div className="PastEventsList">
              <div className="PastEventCard">
                <p className="PastEventDate">04.11</p>
                <img
                  className="PastEventPic"
                  src={"/MockAssets/EventPic1.svg"}
                  alt="EventPic"
                />
                <p className="PastEventDescription">
                  Petrie Museum of Egyptian Archaeology
                </p>
              </div>
              <div className="PastEventCard">
                <p className="PastEventDate">02.12</p>
                <img
                  className="PastEventPic"
                  src={"/MockAssets/EventPic2.svg"}
                  alt="EventPic"
                />
                <p className="PastEventDescription">
                  Petrie Museum of Egyptian Archaeology
                </p>
              </div>
              <div className="PastEventCard">
                <p className="PastEventDate">06.01</p>
                <img
                  className="PastEventPic"
                  src={"/MockAssets/EventPic3.svg"}
                  alt="EventPic"
                />
                <p className="PastEventDescription">
                  Petrie Museum of Egyptian Archaeology
                </p>
              </div>
              <div className="PastEventCard">
                <p className="PastEventDate">03.02</p>
                <img
                  className="PastEventPic"
                  src={"/MockAssets/EventPic4.svg"}
                  alt="EventPic"
                />
                <p className="PastEventDescription">
                  Petrie Museum of Egyptian Archaeology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        
        
        
        */}

      <div className="Page">
        <div className="PageTitleBox">
          <div className="PageTitle">
            <h2>Shop</h2>
          </div>
          <div className="ProductCardListBox">
            <p className="ShopText">
              Request our premium art supplies for you next art event.
            </p>
            <div className="ProductCardList">
              <div className="ProductCard">
                <img
                  className="ProductPic"
                  src={"/MockAssets/EventPic1.svg"}
                  alt="ProductPic"
                />
                <div className="ProductDetails">
                  <p className="ProductDescription">Product Description</p>
                  <p className="ProductPrice">£5.50</p>
                </div>
              </div>
              <div className="ProductCard">
                <img
                  className="ProductPic"
                  src={"/MockAssets/EventPic1.svg"}
                  alt="ProductPic"
                />
                <div className="ProductDetails">
                  <p className="ProductDescription">Product Description</p>
                  <p className="ProductPrice">£5.50</p>
                </div>
              </div>
              <div className="ProductCard">
                <img
                  className="ProductPic"
                  src={"/MockAssets/EventPic1.svg"}
                  alt="ProductPic"
                />
                <div className="ProductDetails">
                  <p className="ProductDescription">Product Description</p>
                  <p className="ProductPrice">£5.50</p>
                </div>
              </div>
              <div className="ProductCard">
                <img
                  className="ProductPic"
                  src={"/MockAssets/EventPic1.svg"}
                  alt="ProductPic"
                />
                <div className="ProductDetails">
                  <p className="ProductDescription">Product Description</p>
                  <p className="ProductPrice">£5.50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        
        
        
        */}
      <div className="Page">
        <div className="PageTitleBox">
          <div className="PageTitle">
            <h2>Any questions?</h2>
            <h3>Ask Away</h3>
          </div>
          <h4>Texttexttexttexttexttexttexttexttexttexttext</h4>
        </div>
      </div>

      {/* 
        
        
        
        */}

      <div className="SocialBox">
        <div className="SocialLinks">
          <img
            className="SocialIcon"
            src="/MockAssets/IconInsta.svg"
            alt="Icon 1"
          />
          <img
            className="SocialIcon"
            src="/MockAssets/IconTikTok.svg"
            alt="Icon 2"
          />
          <img
            className="SocialIcon"
            src="/MockAssets/IconPinterest.svg"
            alt="Icon 3"
          />
          <img
            className="SocialIcon"
            src="/MockAssets/IconFB.svg"
            alt="Icon 4"
          />
        </div>
      </div>
    </div>
  );
}
export default MainSlide;
