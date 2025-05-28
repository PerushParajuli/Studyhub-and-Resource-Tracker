import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

const customers = [
  {
    name: "Tania Andrew",
    email: "tania@gmail.com",
    price: 400,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  },
  {
    name: "John Micheal",
    email: "john@gmail.com",
    price: 420,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
  },
  {
    name: "Alexa Liras",
    email: "alexa@gmail.com",
    price: 340,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  },
  {
    name: "Richard Gran",
    email: "richard@gmail.com",
    price: 520,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  },
  {
    name: "Micheal Levi",
    email: "levi@gmail.com",
    price: 780,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  },
  {
    name: "Alexa Liras",
    email: "alexa@gmail.com",
    price: 340,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  },
  {
    name: "Richard Gran",
    email: "richard@gmail.com",
    price: 520,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  },
  {
    name: "Micheal Levi",
    email: "levi@gmail.com",
    price: 780,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  },
];

export function ChatList() {
  return (
    <Card shadow={false} className="bg-transparent w-full h-full">
      <CardBody className="bg-transparent w-full h-full">
        <div className="w-full divide-y divide-gray-200 h-full max-h-96 overflow-y-auto bg-transparent">
          {customers.map(({ name, email, price, image }, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between pb-3 pt-3 last:pb-0 px-4 cursor-pointer active:bg-gray-300"
            >
              <div className="flex items-center gap-x-3">
                <Avatar size="sm" src={image} alt={name} />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {name}
                  </Typography>
                  <Typography variant="small" color="gray">
                    {/* {email} */}
                    lastest message
                  </Typography>
                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                {/* ${price} */}
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <div className="h-2 w-2 rounded-full bg-red-400"></div>
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
