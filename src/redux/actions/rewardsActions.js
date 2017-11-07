import api from '../../Api/Django';

export const ADD_REWARD_SUCCESS = "ADD_REWARD_SUCCESS";
export const UPDATE_REWARD_SUCCESS = "UPDATE_REWARD_SUCCESS";
export const REMOVE_REWARD_SUCCESS = "REMOVE_REWARD_SUCCESS";

function addRewardSuccess(reward){
    return {
        type:ADD_REWARD_SUCCESS,
        reward
    }
}

function updateRewardSuccess(reward){
    return {
        type:UPDATE_REWARD_SUCCESS,
        reward
    }
}

function removeRewardSuccess(reward){
    return {
        type:REMOVE_REWARD_SUCCESS,
        reward
    }
}

export const addReward = (reward) => (dispatch) =>{
    return api.postNewReward(reward)
        .then(r=>{
            dispatch(addRewardSuccess(r));
            return Promise.resolve(r);
        })
        .catch(e=>{
            console.log(e);
            return Promise.reject(e)
        });
};

export const updateReward = (reward) => (dispatch) => {
    return api.putAxiosReward(reward.id, reward)
        .then(r=>{
            dispatch(updateRewardSuccess(r));
            return Promise.resolve(r)
        })
        .catch(e=>{
            console.log(e);
            return Promise.reject(e);
        });
};

export const removeReward = (reward) => (dispatch) => {
    return api.deleteReward(reward.id)
        .then(r=>{
            dispatch(removeRewardSuccess(reward));
            return Promise.resolve(r);
        })
        .catch(e=>{
            console.log(e);
            return Promise.reject(e);
        });
};

