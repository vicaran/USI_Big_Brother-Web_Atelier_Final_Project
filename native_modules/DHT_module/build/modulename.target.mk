# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := modulename
DEFS_Debug := \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG'

# Flags passed to all source files.
CFLAGS_Debug := \
	-fPIC \
	-Wall \
	-pthread \
	-g \
	-O0

# Flags passed to only C files.
CFLAGS_C_Debug :=

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-fno-rtti \
	-fno-exceptions

INCS_Debug := \
	-I/home/pi/.node-gyp/0.8.16/src \
	-I/home/pi/.node-gyp/0.8.16/deps/uv/include \
	-I/home/pi/.node-gyp/0.8.16/deps/v8/include

DEFS_Release := \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-fPIC \
	-Wall \
	-pthread \
	-O2 \
	-fno-strict-aliasing \
	-fno-tree-vrp

# Flags passed to only C files.
CFLAGS_C_Release :=

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-fno-rtti \
	-fno-exceptions

INCS_Release := \
	-I/home/pi/.node-gyp/0.8.16/src \
	-I/home/pi/.node-gyp/0.8.16/deps/uv/include \
	-I/home/pi/.node-gyp/0.8.16/deps/v8/include

OBJS := \
	$(obj).target/$(TARGET)/modulename.o \
	$(obj).target/$(TARGET)/bcm2835.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-pthread \
	-rdynamic

LDFLAGS_Release := \
	-pthread \
	-rdynamic

LIBS :=

$(obj).target/modulename.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(obj).target/modulename.node: LIBS := $(LIBS)
$(obj).target/modulename.node: TOOLSET := $(TOOLSET)
$(obj).target/modulename.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(obj).target/modulename.node
# Add target alias
.PHONY: modulename
modulename: $(builddir)/modulename.node

# Copy this to the executable output path.
$(builddir)/modulename.node: TOOLSET := $(TOOLSET)
$(builddir)/modulename.node: $(obj).target/modulename.node FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(builddir)/modulename.node
# Short alias for building this executable.
.PHONY: modulename.node
modulename.node: $(obj).target/modulename.node $(builddir)/modulename.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/modulename.node

