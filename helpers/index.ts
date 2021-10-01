import { IFormValues } from "pages/form";

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const getFieldValues = (data: IFormValues) => ({
  fields: [
    {
      name: "ts_lp___could_you_tell_us_about_your_talent_needs_",
      value: data.q1,
    },
    {
      name: "ts_lp___what_s_the_anticipated_length_of_time_you_need_this_talent__",
      value: data.q2,
    },
    {
      name: "ts_lp___what_s_your_anticipated_weekly_time_commitment_needed_",
      value: data.q3,
    },
    {
      name: "ts_lp___do_you_already_have_a_job_description_for_this_role_",
      value: data.q4,
    },
    {
      name: "ts_lp___do_you_need_more_than_one_person__or_will_just_one_do_",
      value: data.q5,
    },
    {
      name: "ts_lp___when_do_you_need_your_talent_to_start_",
      value: data.q6,
    },
    {
      name: "firstname",
      value: data.name.split(" ")[0],
    },
    {
      name: "lastname",
      value: data.name.split(" ").slice(1).join(" "),
    },
    {
      name: "email",
      value: data.email,
    },
    {
      name: "company",
      value: data.company,
    },
    {
      name: "ts_lp___is_there_anything_else_you_d_like_to_share_with_us_",
      value: data.message,
    },
  ],
});
