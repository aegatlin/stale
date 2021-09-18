drop table if exists books;

create table books (
  id serial,
  title text,
  content text
);

insert into books (title, content)
values ('good book', 'Once upon a time, I wrote poem
  It was very good, but it did not rhyme
  People thought me silly, but I called it free
  Just like the dog I never owned
  OKAY WOW!');

insert into books (title, content)
values ('okay book', 'hmm. so okay. well, well.');

alter table books
add column tsv tsvector;

update books
set (tsv) = (
  select to_tsvector('english', content) from books where id=1
) 
where id=1;

update books
set (tsv) = (
  select to_tsvector('english', content) from books where id=2
)
where id=2;

create index books_tsvector_index on books using gin ( tsv );

select
  id,
  title,
  ts_rank_cd(tsv, plainto_tsquery('okay well')) as book_rank,
  ts_headline(content, plainto_tsquery('okay'), 'StartSel=[[[,StopSel=]]]') as hl
from books
order by book_rank desc;

