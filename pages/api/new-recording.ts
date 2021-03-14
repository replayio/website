import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.method, req.body.event);
  return res.status(200).end();
};

const event = {
  payload: {
    event: {
      session_variables: {
        "x-hasura-role": "admin",
      },
      op: "INSERT",
      data: {
        old: null,
        new: {
          last_screen_mime_type: null,
          size: null,
          recordingTitle: null,
          example: null,
          url: null,
          date: "2021-03-14T17:07:11.68262+00:00",
          recording_id: null,
          deleted_at: null,
          id: "e7111389-7fc1-4eca-9fcc-4ef242424bb0",
          is_private: false,
          title: null,
          user_id: null,
          duration: null,
          last_screen_data: null,
          description: null,
        },
      },
      trace_context: {
        trace_id: 5981338830834870000,
        span_id: 4345415931262540000,
      },
    },
    created_at: "2021-03-14T17:07:11.68262Z",
    id: "5e1718ce-037b-4fb8-bf44-d87018c0c8a4",
    delivery_info: {
      max_retries: 0,
      current_retry: 0,
    },
    trigger: {
      name: "new_recording",
    },
    table: {
      schema: "public",
      name: "recordings",
    },
  },
  headers: [
    {
      value: "application/json",
      name: "Content-Type",
    },
    {
      value: "hasura-graphql-engine/v1.3.3",
      name: "User-Agent",
    },
  ],
  version: "2",
};
