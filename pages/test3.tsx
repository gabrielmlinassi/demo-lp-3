type Field = {
  name: string;
  value: string;
};

type Values = {
  fields: Field[];
};

const values: Values = {
  fields: [
    {
      name: "ts_lp___could_you_tell_us_about_your_talent_needs_",
      value: "Need an extra pair of hands to complete a project.",
    },
    {
      name: "ts_lp___what_s_the_anticipated_length_of_time_you_need_this_talent__",
      value: "Less than a month",
    },
    {
      name: "ts_lp___what_s_your_anticipated_weekly_time_commitment_needed_",
      value: "30 hours per week or more",
    },
    {
      name: "ts_lp___do_you_already_have_a_job_description_for_this_role_",
      value: "Yes, I have a written job description.",
    },
    {
      name: "ts_lp___do_you_need_more_than_one_person__or_will_just_one_do_",
      value: "More than one is needed.",
    },
    {
      name: "ts_lp___when_do_you_need_your_talent_to_start_",
      value: "I'm not sure yet let's talk",
    },
    {
      name: "firstname",
      value: "Gabriel",
    },
    {
      name: "lastname",
      value: "Linassi",
    },
    {
      name: "email",
      value: "gabrielm.linassi@gmail.com",
    },
    {
      name: "company",
      value: "SweetRush",
    },
    {
      name: "ts_lp___is_there_anything_else_you_d_like_to_share_with_us_",
      value: "lorem ipsum...",
    },
  ],
};

export default function Test3() {
  const handleClick = () => {
    fetch("/api/submit-form", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log({ data }))
      .catch((err) => console.log({ err }));
  };

  return (
    <div>
      <button className="px-4 py-2 bg-green-300" onClick={handleClick}>
        submit form
      </button>
    </div>
  );
}
