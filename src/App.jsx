import { Post } from './Post';

export function App() {
    return (
        <div>
          <Post 
          author ="Lucas Lima"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ratione nam animi expedita quia laboriosam cupiditate fugiat, ipsam architecto nulla eum dolorum minima possimus asperiores error ea! Nostrum, quaerat quas!"
          />
          <Post
          author ="Dilmer George"
          content="Flamengo, campeão da Copa do Brasil."
          />
        </div>
    )
}

