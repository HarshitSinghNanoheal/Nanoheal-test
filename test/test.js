
const assert = require('assert');
const request = require('supertest');
const app = require('../app.js');

describe('POST /boards', function() {
    it('should create a new board item', function(done) {
        request(app)
            .post('/boards')
            .send({
                title: 'Create a new project'
            })
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);

                assert.strictEqual(res.body.id, 1);
                assert.strictEqual(res.body.title, 'Create a new project');
                assert.strictEqual(res.body.stage, 1);

                done();
            });
    });

    it('should assign unique IDs to new items', function(done) {
        request(app)
            .post('/boards')
            .send({
                title: 'Complete the assignment'
            })
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);

                assert.strictEqual(res.body.id, 2);
                assert.strictEqual(res.body.title, 'Complete the assignment');
                assert.strictEqual(res.body.stage, 1);

                done();
            });
    });
});

describe('PUT /boards/:id', function() {
    it('should update the stage of an existing item', function(done) {
        request(app)
            .put('/boards/1')
            .send({
                stage: 2
            })
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);

                assert.strictEqual(res.body.id, 1);
                assert.strictEqual(res.body.title, 'Create a new project');
                assert.strictEqual(res.body.stage, 2);

                done();
            });
    });

    it('should accept stage 3', function(done) {
        request(app)
            .put('/boards/2')
            .send({
                stage: 3
            })
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);

                assert.strictEqual(res.body.stage, 3);

                done();
            });
    });

    it('should reject an invalid stage', function(done) {
        request(app)
            .put('/boards/1')
            .send({
                stage: 4
            })
            .expect(400, done);
    });

    it('should reject stage 0', function(done) {
        request(app)
            .put('/boards/1')
            .send({
                stage: 0
            })
            .expect(400, done);
    });
});
