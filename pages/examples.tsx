import React, { FC } from "react";
import { Layout } from "../components/Layout";

const ExamplePage: FC = () => (
  <Layout title="Examples">
    <h1>⭐️ Examples</h1>
    <p className="mt-2 text-gray-500">
      Here are some examples of property listing descriptions generated using
      this tool. A lot of times it makes sense, but every once in a while GPT-3
      goes down a strange path (see the last example...).
    </p>

    <h2 className="mt-8">Example 1</h2>
    <p className="mt-2 text-gray-500 italic">
      Beautiful home in Ocean View. This home features stainless-steel
      appliances, slate floors in bathrooms and tile floors in all other rooms,
      granite countertops, custom cabinetry, ceiling fan and fireplace. The
      kitchen is open so you can easily entertain friends and family. Hardwood
      floors and two sumptuous bathrooms make this a first-class home.
      Landscaped, private garden patio. Great for kids/pets to play in orange
      grove. Walk to a wide variety of neighborhood restaurants and bars on
      Balboa Street. Walk to Farmer's Market or public transportation.
    </p>

    <h2 className="mt-8">Example 2</h2>
    <p className="mt-2 text-gray-500 italic">
      Unique opportunity to own a piece of Bernal Heights history. Expansive
      outdoor space! Large enough for a Jacuzzi tub! Perfect for entertaining.
      Captures gorgeous views of the whole neighborhood and sunset. Awesome
      location! Conveniently located near Whole Foods, grocery stores, parks,
      and Bernal Heights Center. Freshly renovated, including painted, new
      floors, new kitchen faucet, new stove, new lights, and much more! Parking
      is available on the street or at the public garage that is across the
      street. Recent remodel!
    </p>

    <h2 className="mt-8">Example 3</h2>
    <p className="mt-2 text-gray-500 italic">
      Boasting a very colorful painted stairwell, a gleaming kitchen with marble
      countertops and canned lighting, a comfortable living room, dining room
      and office nook, even sliding-glass-doors to the corner balcony. The only
      thing missing, these days, is a drive-thru teller window at the local
      branch of Bank of America, for convenience's sake. (And if you need one of
      those, looking elsewhere may be a career and life-decision that you will
      need to make.)
    </p>
  </Layout>
);

export default ExamplePage;
