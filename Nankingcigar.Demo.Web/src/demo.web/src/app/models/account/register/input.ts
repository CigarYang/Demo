/*
 * @Author: Chao Yang
 * @Date: 2017-08-25 14:06:35
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2017-09-04 09:27:36
 */
export class RegisterInput {
    constructor(
        public userName: string = '',
        public password: string = '',
        public email: string = ''
    ) {
    }
}
