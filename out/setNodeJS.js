function set(data1) {var FastBuffers = {
    writer: class Writer {
        constructor(size) {
            this.index = 0;
            this.buffer = Buffer.alloc(size);
        }
        writeString8(string) {
            for (var i = 0; i < string.length; i++) {
                this.writeUInt8(string.charCodeAt(i))
            }
            this.writeUInt8(0)
        }
        writeString16(string) {
            for (var i = 0; i < string.length; i++) {
                this.writeUInt16BE(string.charCodeAt(i))
            }
            this.writeUInt16BE(0)
        }
        writeString32(string) {
            for (var i = 0; i < string.length; i++) {
                this.writeUInt32BE(string.charCodeAt(i))
            }
            this.writeUInt32BE(0)
        }
        writeInt8(n) {
            this.buffer.writeInt8(n, this.index++)
        }
        writeInt16BE(n) {
            this.buffer.writeInt16BE(n, this.index)
            this.index += 2;
        }
        writeInt16LE(n) {
            this.buffer.writeInt16LE(n, this.index)
            this.index += 2
        }
        writeInt32BE(n) {
            this.buffer.writeInt32BE(n, this.index)
            this.index += 4;
        }
        writeInt32LE(n) {
            this.buffer.writeInt32LE(n, this.index)
            this.index += 4;
        }
        writeUInt8(n) {
            this.buffer.writeUInt8(n, this.index++)
        }
        writeUInt16BE(n) {
            this.buffer.writeUInt16BE(n, this.index)
            this.index += 2;
        }
        writeUInt16LE(n) {
            this.buffer.writeUInt16LE(n, this.index)
            this.index += 2;
        }
        writeUInt32BE(n) {
            this.buffer.writeUInt32BE(n, this.index)
            this.index += 4;
        }
        writeUInt32LE(n) {
            this.buffer.writeUInt32LE(n, this.index)
            this.index += 4;
        }
        toBuffer() {
            return this.buffer;
        }
    },
    reader: class Reader {
        constructor(buf) {
            this.index = 0;
            this.buffer = buf;
        }
        readString8() {
            var data = "";
            while (this.index <= this.buffer.length) {
                var d = this.readUInt8();
                if (!d) break;
                data += String.fromCharCode(d);
            }
            return data;
        }
        readString16() {
            var data = "";
            while (this.index <= this.buffer.length) {
                var d = this.readUInt16BE();
                if (!d) break;
                data += String.fromCharCode(d);
            }
            return data;
        }
        readString32() {
            var data = "";
            while (this.index <= this.buffer.length) {
                var d = this.readUInt32BE();
                if (!d) break;
                data += String.fromCharCode(d);
            }
            return data;
        }
        readInt8() {
            return this.buffer.readInt8(this.index++);
        }
        readUInt8() {
            return this.buffer.readUInt8(this.index++);
        }
        readInt16BE() {
            var data = this.buffer.readInt16BE(this.index);
            this.index += 2;
            return data;
        }
        readInt16LE() {
            var data = this.buffer.readInt16LE(this.index);
            this.index += 2;
            return data;
        }
        readUInt16BE() {
            var data = this.buffer.readUInt16BE(this.index);
            this.index += 2;
            return data;
        }
        readUInt16LE() {
            var data = this.buffer.readUInt16LE(this.index);
            this.index += 2;
            return data;
        }
        readInt32BE() {
            var data = this.buffer.readInt32BE(this.index);
            this.index += 4;
            return data;
        }
        readInt32LE() {
            var data = this.buffer.readInt32LE(this.index);
            this.index += 4;
            return data;
        }
        readUInt32BE() {
            var data = this.buffer.readUInt32BE(this.index);
            this.index += 4;
            return data;
        }
        readUInt32LE() {
            var data = this.buffer.readUInt32LE(this.index);
            this.index += 4;
            return data;
        }
    }
}
function setIfs(writer,array) {
    var i,j,temparray,chunk = 7;
for (i=0,j=array.length; i<j; i+=chunk) {
    temparray = array.slice(i,i+chunk);
    writer.writeUInt8(parseInt("1" + temparray.join(""),2));
}
    writer.writeUInt8(0);
}
var byteLen = 0;
var ifs = [];
byteLen += 2
for (var i1 = 0; i1 < data1.length; i1 ++) {
var data2 = data1[i1];
var obj=data2;if (obj.type == 0) {
ifs.push(1)
byteLen += 1 + data2.hello.length * 1;
} else {
ifs.push(0)
var obj=data2;if (obj.type == 1) {
ifs.push(1)
byteLen += 1;
} else {
ifs.push(0)
var obj=data2;if (obj.type == 2) {
ifs.push(1)
byteLen += 2 + data2.is.length * 2;
} else {
ifs.push(0)
byteLen += 1;
}
}
}
}
byteLen += Math.ceil(ifs.length / 7) + 1
var writer = new FastBuffers.writer(byteLen);
setIfs(writer,ifs);
var len2 = data1.length
writer.writeUInt16BE(len2)
for (var i2 = 0; i2 < len2; i2 ++) {
var data2 = data1[i2];
var obj=data2;if (obj.type == 0) {
writer.writeString8(data2.hello);
} else {
var obj=data2;if (obj.type == 1) {
writer.writeUInt8(data2.this+1);
} else {
var obj=data2;if (obj.type == 2) {
writer.writeString16(data2.is);
} else {
writer.writeUInt8(data2.atest-500);
}
}
}
}
return writer.toBuffer();}