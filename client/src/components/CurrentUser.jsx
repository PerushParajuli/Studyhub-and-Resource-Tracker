import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function CurrentUser() {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="max-w-full h-fit flex flex-row gap-x-4 items-center py-1 px-2"
    >
      <Avatar
        size="md"
        variant="circular"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        alt="tania andrew"
      />

      <div className="flex w-full flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <Typography variant="h6" color="blue-gray">
            <span>Perush Parajuli</span>
          </Typography>
        </div>
        <Typography color="blue-gray" className="text-xs">
          {"Active / Passive"}
        </Typography>
      </div>
    </Card>
  );
}
