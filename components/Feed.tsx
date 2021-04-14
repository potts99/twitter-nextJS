import { Card, Spin } from "antd";
import { useFeed, useMe } from "./util/hooks";
import { DeleteButton } from "./DeleteButton";

export const Feed = () => {
  const { feed } = useFeed();
  const { me } = useMe();

  console.log(feed)

  return feed ? (
    <>
      {feed.map(({ id, author, text }, i) => (
        <Card key={i} style={{ margin: 15}}>
          {me && author.id === me.id && <DeleteButton id={id} feed={feed} />}
          <h4>{text}</h4>
          <span>{author.username}</span>
        </Card>
      ))}
    </>
  ) : (
    <Spin />
  );
};
