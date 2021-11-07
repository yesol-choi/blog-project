import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/',postsCtrl.list );
posts.post('/',postsCtrl.write );

const post = new Router(); // /api/posts/:id
posts.get('/',postsCtrl.read);
posts.delete('/',postsCtrl.remove);
posts.patch('/',postsCtrl.update);  //이런 리팩토링시에, 한눈에 경로가 들어오지 않는다.

post.use('/:id',postsCtrl.checkObjectId, post.routes());
export default posts;
