/* eslint-disable no-unused-vars */
import NoAbstractInstanceException from '../../Errors/NoAbstractInstanceException';
import NotImplementedException from '../../Errors/NotImplementedException';

class Member {
    constructor(lib) {
        this.lib = lib;
        if (this.constructor === 'Member') {
            throw new NoAbstractInstanceException();
        }
    }
    
    // **** GETTERS / SETTERS **** //

    getID(member) {
        return member.id;
    }

    /**
     * Returns Roles ids
     *
     * @param {Member} member
     * @returns {Array<String>} - Array of roles IDs
     *
     * @memberof Member
     */
    getRoles(member) {
        throw new NotImplementedException();
    }

    /**
     * Returns Roles object
     *
     * @param {Member} member
     * @returns {Array<Role>} - Array of Roles object
     *
     * @memberof Member
     */
    getRolesObject(member) {
        throw new NotImplementedException();
    }

    /**
     * Whether the member has this permission or not
     *
     * @param {Member} member
     * @param {String} permission
     * @returns {Boolean}
     *
     * @memberof Member
     */
    hasPermission(member, permission) {
        throw new NotImplementedException();
    }
}

export default Member;
