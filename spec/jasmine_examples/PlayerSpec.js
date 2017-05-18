describe("Word Frequency", function() {
  var main = require('../../lib/jasmine_examples/Player.js')


  it('returns empty string given empty string',function(){
    var result=main('')
    var expect_string=''
    expect(expect_string).toEqual(result)
  })

  it('returns string given one word',function()
  {
    var result=main('it')
    expect(result).toEqual('it 1')

  })

  it('returns string given two different words',function()
  {
    var result=main('it was')
    expect(result).toEqual('it 1\r\nwas 1')
  })

  it('returns string given duplicated different words',function()
  {
    var result=main('it it was')
    expect(result).toEqual('it 2\r\nwas 1')
  })

  it('returns string given duplicated different words need to be sorted',function()
  {
    var result=main('it was was')
    expect(result).toEqual('was 2\r\nit 1')
  })

  it('returns string given words splited by multiple spaces',function()
  {
    var result=main('it   was')
    expect(result).toEqual('it 1\r\nwas 1')
  })

  it('returns string given full words ',function()
  {
    var result=main('it was the age of wisdom it was the age of foolishness it is')
    expect(result).toEqual('it 3\r\nwas 2\r\nthe 2\r\nage 2\r\nof 2\r\nwisdom 1\r\nfoolishness 1\r\nis 1')
  })



})