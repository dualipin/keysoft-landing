export type Skill = {
  name: string;
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export type Service = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};
