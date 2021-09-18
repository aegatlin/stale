drop table if exists books;

create table books (
  id serial,
  title text,
  content text,
  tsv tsvector
);

insert into books (title, content)
values ('good book', 'Once upon a time, I wrote poem
  It was very good, but it did not rhyme
  People thought me silly, but I called it free
  Just like the dog I never owned
  OKAY WOW!
  This is ageless.');

drop table if exists temp;
create table temp (content text);
\copy temp (content) from program 'cat ./a\ modest\ proposal.txt';

insert into books (title, content)
values (
  'a modest proposal',
  (select string_agg(content, chr(10)) from temp limit 1)
);

drop table temp;

update books
set (tsv) = (select to_tsvector('english', content));

create index books_tsvector_index on books using gin ( tsv );
select tsv from books where id=1;

select
  id,
  title,
  ts_rank_cd(tsv, plainto_tsquery('age')) as book_rank,
  ts_headline(
    content,
    plainto_tsquery('age'),
    'MaxFragments=4,StartSel=[[[,StopSel=]]]'
  ) as hl
from books
order by book_rank desc;

