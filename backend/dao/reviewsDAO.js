import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId

let reviews

export default class ReviewsDAO{
    static async injectDB(conn){
        if(reviews){
            return
        }
        try {
            reviews = await conn.db(process.env.MOVIEREVIEW_NS).collection('reviews')
        } catch (e) {
            console.error(`Unable to establish connection handle in reviewDAO: ${e}`);
        }
    }

    static async addReview(movieId, user, review, date){
        try {
            const reviewDoc = {
                name: user.name,
                user_id: user._id,
                date: date,
                review: review,
                movie_id: ObjectId(movieId)
            }
            return await reviews.insertOne(reviewDoc)
        } catch (error) {
            console.error(`Unable to Post review: ${error}`);
            return {error: error}
        }
    }

    static async updateReview(reviewId,userId,review,date){
        try {
            const updateResponse = await reviews.updateOne(
                {user_id: userId,_id: ObjectId(reviewId)},
                {$set: {review: review, date: date}}
                )
                return updateResponse
        } catch (e) {
            console.error(`Unable to Update review: ${e}`);
            return error
        }
    }

    static async deleteReview(reviewId, userId){
        try {
            const deleteResponse = await reviews.deleteOne({
                _id: ObjectId(reviewId),
                user_id: userId
            })
            return deleteResponse
        } catch (error) {
            console.error(error);
            return {error: error}
        }
    }
}