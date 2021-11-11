import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/',postsCtrl.list );
posts.post('/',checkLoggedIn, postsCtrl.write );

const post = new Router(); // /api/posts/:id
posts.get('/',postsCtrl.read);
posts.delete('/',checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
posts.patch('/',checkLoggedIn,postsCtrl.checkOwnPost, postsCtrl.update);  //이런 리팩토링시에, 한눈에 경로가 들어오지 않는다.

post.use('/:id',postsCtrl.getPostById, post.routes());
export default posts;
