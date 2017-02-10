function set(data1) {
function Writer(size) {
            this.index = 0;
            this.buffer = Buffer.alloc(size);
        }
        Writer.prototype.writeString8 = function(string) {
            for (var i = 0; i < string.length; i++) {
                this.writeUInt8(string.charCodeAt(i))
            }
            this.writeUInt8(0)
        }
         Writer.prototype.writeString16 = function(string) {
            for (var i = 0; i < string.length; i++) {
                this.writeUInt16BE(string.charCodeAt(i))
            }
            this.writeUInt16BE(0)
        }
         Writer.prototype.writeString32 = function(string) {
            for (var i = 0; i < string.length; i++) {
                this.writeUInt32BE(string.charCodeAt(i))
            }
            this.writeUInt32BE(0)
        }
         Writer.prototype.writeInt8 = function(n) {
            this.buffer.writeInt8(n, this.index++)
        }
         Writer.prototype.writeInt16BE = function(n) {
            this.buffer.writeInt16BE(n, this.index)
            this.index += 2;
        }
         Writer.prototype.writeInt16LE = function(n) {
            this.buffer.writeInt16LE(n, this.index)
            this.index += 2
        }
         Writer.prototype.writeInt32BE = function(n) {
            this.buffer.writeInt32BE(n, this.index)
            this.index += 4;
        }
         Writer.prototype.writeInt32LE = function(n) {
            this.buffer.writeInt32LE(n, this.index)
            this.index += 4;
        }
         Writer.prototype.writeUInt8 = function(n) {
            this.buffer.writeUInt8(n, this.index++)
        }
         Writer.prototype.writeUInt16BE = function(n) {
            this.buffer.writeUInt16BE(n, this.index)
            this.index += 2;
        }
         Writer.prototype.writeUInt16LE = function(n) {
            this.buffer.writeUInt16LE(n, this.index)
            this.index += 2;
        }
         Writer.prototype.writeUInt32BE = function(n) {
            this.buffer.writeUInt32BE(n, this.index)
            this.index += 4;
        }
         Writer.prototype.writeUInt32LE = function(n) {
            this.buffer.writeUInt32LE(n, this.index)
            this.index += 4;
        }
         Writer.prototype.toBuffer = function() {
            return this.buffer;
        }

var byteLen = 0;

byteLen += 1 + data1.hello.length * 1;
byteLen += 2 + data1.is.length * 2;
var writer = new Writer(byteLen);
writer.writeString8(data1.hello);
writer.writeUInt8(data1.this+21);
writer.writeUInt16BE(data1.atest-48568);
writer.writeString16(data1.is);
return writer.toBuffer();}