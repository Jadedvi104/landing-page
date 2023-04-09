import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
 
export default function SimpleCard() {
  return (
    <Card
      shadow={false}
      className="
      relative 
      grid 
      h-[40rem] 
      w-full 
      max-w-[full] 
      items-end 
      justify-center 
      overflow-hidden 
      text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="
        absolute 
        inset-0 
        m-0 
        h-full 
        w-full 
        rounded-none 
        bg-[url('https://yt3.googleusercontent.com/o1uH-iT7PP1R0b5cGOesyLBnEtBvzUY7xd8vhnqVXGLuVq7vBGQMj828SW0Fn-Botw2OqXvfjw=s900-c-k-c0x00ffffff-no-rj')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          Git gud at English in 3 months!
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          Kru Dew
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="candice wu"
          className="border-2 border-white"
          src="https://gumlet.assettype.com/ejan%2F2021-08%2F8dd97297-1e5b-4b41-8fb7-57711e337034%2F1.jpg?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
        />
      </CardBody>
    </Card>
  );
}