---
title: Resume as a Service
description: 
  Sometime in my job hunt last year I realized that the process of
  sending/editing resume's is a giant PIA. So I'm setting out to fix the problem
  for other developers
date: Dec 26, 2020
slug: resume-as-a-service
---

Earlier this year when Covid took over the world, I like many others got laid
off from my tech job where I was a contractor. I wasn't upset or angry at the
company, rather I was upset and angry at the though of me having to edit and
send out countless copies of my resume to potential employers.

I got through it, though the entire experience put a bad taste in my mouth.
Here I was building compex software to accomplish ground breaking things at
work, but the hiring process still involved spending hours of time dealing with
editing and formatting your resume, and then reformatting when Google Docs
inevatably messes up.

After getting hired I started to play around with some ideas for how to solve
this resume madness problem. My first solution was to write my resume in
Markdown, then convert it to HTML, DOCX and PDF formats. This system worked
pretty well and I still use it today (you can check it out
[here](https://resume.glvn.co)).

My V1 solution solved the major headache of formatting. Formatting a document in
MS Word or Google Docs is equivalent to pulling teeth in my book, it's painful,
inconsistent and the result is very brittle which makes updates damn near
impossible. With V1 I was able to have granular control over the formatting by
using Markdown. 

However a second and more glaring problem existed: it was still very difficult
and time consuming to send employers and recruiters a tailored version of my
resume. While the formatting issue allowed me to move quicker on edits, I was
still having to:

1. Edit the markdown doc
2. Convert the doc to PDF
3. Send the doc to the recruiter

That doesn't sound too bad if you are sending out resume's on a small scale,
but being newly unemployed in the middle of a global pandemic meant that I was
talking to 50-100 companies rather than just a handful. When you get to that
scale things start to break down, not during the editing process, but after the
fact. 

Often times I would have to send the same copy of a resume to multiple people
within a company, multiply that times 10 companies and suddently you're dealing
with 10 variants of your resume going to 50 different people and a single fuck
up can cause you to loose out on a position. 

So this year I will be building V2 of my resume framework. This new framework
retains the benefit of controlling your Resume formatting and will attempt to
solve the latter problem: verioning and variants of resumes.

## The Idea

So how will this new solution look? For now that is still somewhat up in the air
but here is the plan:

* git will be used as a backend, storing all variants of the resume, and
  creating new variants using branching and/or tagging. Git has shown to excel
for tasks such as this and it also costs virtually nothing.
* CMS or Command Line Tools: I will probably start with CLI tools then move to
  building a custom CMS. Netlify proved that you can build a competent CMS using
git as a backend and the plan will be to either fork Netlify CMS or build
something from scratch.
* The frontend will be built as an SPA using GatsbyJS. Gatsby here is a very
  appealing option as it has GraphQL under the hood for querying data. 


## Other Challenges

There will be a littany of other challenges I will face building this new
system. Two such challenges are: opinionation in the frontend and conversion.
Lets start with Opinionation. 

The frontend is natually going to be opinionated in that it will look like *my*
ideal resume format, but you will likely hate it and want something else. Here
there is going to be a fine balancing act of providing easy building blocks for
those that need to get up and running quickly while at the same time providing
customization to those that want to build something more custom. 

The last challenge is conversion. V1 uses Pandoc to convert Markdown into HTML
and other formats. This is a pain point for users as they will have to install
Pandoc and all of it's dependencies before they can convert, for some this
isn't a big deal but if you don't already have a Python enviorment setup it can
become a real challenge.

## Getting to work

I am already working on V2 of my resume framework. I will post updates as the
work progresses. Until next time!  






