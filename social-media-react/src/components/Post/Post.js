import React from "react";
import { format } from "date-fns";
import {
  Container,
  Header,
  Profile,
  Content,
  Button,
  Buttons,
  Icon,
} from "./Post.style";
import {
  faCommenting,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export function Post({ data }) {
  console.log(data);

  return (
    <Container>
      <Header>
        <Profile>
          <img src="https://source.unsplash.com/30x30" alt={data.author} />
          <div>
            <p>{data.author}</p>
            <p>{format(new Date(data.date), "dd MMM yyyy")}</p>
          </div>
        </Profile>
      </Header>
      <Content>
        {data.text !== "" && <p>{data.text}</p>}
        {data.images.length > 0 &&
          data.images.map((image, i) => (
            <img src={image} alt={`${data.author}'s post`} key={`image_${i}`} />
          ))}
        {data.videos.length > 0 &&
          data.videos.map((video, i) => (
            <video autoplay controls muted loop key={`video_${i}`}>
              <source
                src={video}
                type={`video/${video.substring(
                  video.length - 3,
                  video.length
                )}`}
              />
            </video>
          ))}
      </Content>
      <Buttons>
        <Button>
          <Icon icon={faThumbsUp} />
          <span className="label">Like</span>
          {data.likes.length > 0 && (
            <span className="count">{data.likes.length}</span>
          )}
        </Button>
        <Button>
          <Icon icon={faShare} />
          <span className="label">Share</span>
          {data.shares.length > 0 && (
            <span className="count">{data.shares.length}</span>
          )}
        </Button>
        <Button>
          <Icon icon={faCommenting} />
          <span className="label">Comment</span>
          {data.comments.length > 0 && (
            <span className="count">{data.comments.length}</span>
          )}
        </Button>
      </Buttons>
    </Container>
  );
}
