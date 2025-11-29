import React from "react";

type Post = {
  id: string;
  title: string;
  content: React.ReactNode;
};

const PcBuildPostsArray: Post[] = [
  {
    id: "post1",
    title: "Post 1, The planning stage",
    content: (
      <>
        <p>
          A personal project I'm currently working on is building a new PC. I'm
          still in the research stage at the moment, which includes a couple new
          PC related YouTube subscriptions, keeping up with news from PC related
          outlets. There was a lot of interesting coverage from the 2025
          Computex exhibition.
        </p>
        <p>
          There are a lot of possible combinations of components in the PC
          building space and I've chosen to go with an AMD CPU coupled with an
          AMD GPU. These are the most important parts I think and although I
          have preferences in motherboard, ram, memory, cooling and psu
          manufacturers I am less set on these yet.
        </p>
        <p>
          For my CPU I chose AMD because they are great chips overall and have
          better gaming performance. My first choice was the Ryzen 7 9800x3d
          which would be overkill for the GPU I'm going to pair it with. On the
          other hand I like the idea of my PC being future proof. Another option
          would be the Ryzen 7 7800x3d which also benefits from the 3D V-cache
          which increases load times and fps. The third option is the Ryzen 7
          9700x, this is the most budget friendly choice. All three options are
          8-core processors.
        </p>
        <p>
          On the GPU side the most logical choice for me is the AMD Radeon RX
          9070XT, I'm just not sure yet which AIB-partner is the best for me.
          For example the Asrock Steel Legend RX 9070XT is the most budget
          friendly but not the best performer. While something like a Powercolor
          Red Devil RX 9070XT is more performant and better for overclocking,
          but is 22% more expensive at the time of writing.
        </p>
        <p>
          For keeping track of different build ideas, PcPartPicker is an
          excellent tool. I've got a few builds on my account, click{" "}
          <a
            className="ProjectsLink"
            href="https://nl.pcpartpicker.com/list/Jh9yzP"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          for a build I'm currently considering.
        </p>
      </>
    ),
  },
  {
    id: "post2",
    title: "Post 2, The desk",
    content: (
      <>
        <p>
          There are a couple of things I look for in a desk. First and foremost
          it needs to be functional. Secondly I want a height-adjustable desk to
          be more healthy. Thirdly it needs to be durable because I plan to use
          it for a long time and it needs to be able to carry a decent amount of
          weight. And finally I would like it to look nice.
        </p>
        <p>
          A lot of the desks I found were just to small. Finally I found one
          which is a good size, height-adjustable, sturdy and looks nice
          especially when combined with a walnut top. The walnut top makes it
          more pricey of course but I do like a good solid piece of wood as
          oposed to veneer.
        </p>
      </>
    ),
  },
  {
    id: "post3",
    title: "Post 3, PlaceholderPlaceholder",
    content: (
      <>
        <p>
          PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder
          PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder
          PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder
          PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder
          PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder
          PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder
          PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder
          PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder
        </p>
      </>
    ),
  },
];

export default PcBuildPostsArray;
