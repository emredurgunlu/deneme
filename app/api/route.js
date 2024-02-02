import { datas } from "./data";
export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()

  return Response.json(datas);
}

export async function POST(request) {
  const data = await request.json();

  const newData = {
    id: datas.length + 1,
    name: data.name,
  };
  datas.push(newData);

  return new Response(JSON.stringify(newData), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

export async function PATCH(request, { params }) {
  const data = await request.json();
  const { name } = data;
  // const index = datas.findIndex((data) => data.id === parseInt(params.id));
  datas[2].name = name;
  return Response.json(datas[2]);
}
