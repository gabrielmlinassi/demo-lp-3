import type { NextApiRequest, NextApiResponse } from "next";

const submitForm = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(JSON.stringify(req.body));

  fetch(process.env.ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: req.body,
  })
    .then((res) => res.json())
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
};

export default submitForm;
